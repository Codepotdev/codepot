import scrapy
import requests
from items import Item
from scrapy.utils.project import get_project_settings


class TrendingSpider(scrapy.Spider):
    """
    Get GitLab Trending repositories
    """
    name = "gitlab_trending"
    settings = get_project_settings()

    def start_requests(self):
        """
        Start calls to the provided url's
        """
        url = self.settings.get('GITLAB_TRENDING')        
        yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        """
        Parse the response object and select the article box for each trending repo
        """
        repos = []
        list = response.xpath('//div[@class="js-projects-list-holder"]//ul')
        api_url = 'https://gitlab.com/api/v4/projects/'
        for i, li in enumerate(list.css('.project-row')):
            name = li.xpath('//a[@class="text-plain gl-mr-3 js-prefetch-document"]//@href').extract()[i]
            url_encode_name = name[1:].replace('/', '%2F')
            repo = requests.get(f'{api_url}{url_encode_name}').json()
            repo_item = Item()
            repo_item['id'] = repo.get('id')
            repo_item['type'] = 'explore'
            repo_item['title'] = repo.get('name_with_namespace')
            repo_item['name'] = repo.get('name')
            repo_item['description'] = repo.get('description')
            repo_item['tags'] = repo.get('topics')
            repo_item['image'] = repo.get('avatar_url')
            repos.append(repo_item)
        return repos
