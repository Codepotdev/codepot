import scrapy
from items import Item
import toml
import helpers
from scrapy.utils.project import get_project_settings
import requests

class IssuesSpider(scrapy.Spider):
    """
    Get GitHub repositories issues, labeld help-wanted
    """
    name = "issues"
    settings = get_project_settings()
    url = settings.get('GITHUB_REPOS')

    def start_requests(self):
        """
        Start calls to the provided url's
        """
        token = self.settings.get('GITHUB_TOKEN')  
        headers = helpers.add_request_headers(token)
        with open('../../data/repositories.toml', "r") as data_file:
            data = toml.load(data_file)

        for r in data['repositories']:
            #TODO: read the repo label from the flag
            languages = requests.get(url=f'{self.url}/{r}/languages', headers=headers).json()
            yield scrapy.Request(url=f'{self.url}/{r}/issues?labels=help%20wanted',
                                 headers=headers,
                                 callback=self.parse,
                                 meta={'languages': languages})

    def parse(self, response):
        """
        Parse the response object and select the article box for each trending repo
        """
        repositories = response.json()
        repos = []
        languages = response.meta.get('languages')
        for repo in repositories:
            repo_item = Item()
            repo_item['id'] = repo.get('id')
            repo_item['type'] = 'contribute'
            repo_item['title'] = repo.get('title')
            repo_item['description'] = helpers.markdown_to_text(repo.get('body'))
            repo_item['name'] = repo['user'].get('login')
            repo_item['tags'] = list(languages.keys())
            repo_item['image'] = repo['user'].get('avatar_url')
            repos.append(repo_item)
        return repos

