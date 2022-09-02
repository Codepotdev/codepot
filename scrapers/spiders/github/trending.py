import scrapy
import requests
from items import Item
from scrapy.utils.project import get_project_settings


class TrendingSpider(scrapy.Spider):
    """
    Get GitHub Trending repositories
    """
    name = "trending"
    settings = get_project_settings()

    def start_requests(self):
        """
        Start calls to the provided url's
        """
        url = self.settings.get('GITHUB_TRENDING')        
        yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        """
        Parse the response object and select the article box for each trending repo
        """
        repos = []
        url = self.settings.get('GITHUB_REPOS')
        headers = self.__request_headers()
        for quote in response.css('article.Box-row h1'):
            href = quote.css('a').attrib['href']
            name = href[1:]
            repo = requests.get(f'{url}/{name}', headers=headers).json()
            languages = requests.get(f'{url}/{name}/languages', headers=headers).json()
            if languages:
                language = list(languages)[0]
            repo_item = Item()
            repo_item['id'] = repo.get('id')
            repo_item['title'] = repo.get('full_name')
            repo_item['description'] = repo.get('description')
            repo_item['tags'] = repo.get('topics')
            repo_item['url'] = repo.get('html_url')
            repo_item['language'] = language
            repo_item['image'] = repo['owner'].get('avatar_url')
            repo_item['type'] = 'github-trending'
            repos.append(repo_item)
        return repos

    def __request_headers(self):
        """
        Setup headers for API requests
        @TODO: Move this to utils/helper
        """
        token = self.settings.get('GITHUB_TOKEN')     
        headers={
            'User-Agent': 'Mozilla/5.0',
            "Accept": "application/vnd.github.v3+json",
            "Authorization": token
        }
        return headers