import scrapy
from items import Item
import toml
import requests
from scrapy.utils.project import get_project_settings


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
        headers = self.__request_headers()
        with open('../../data/repositories.toml', "r") as data_file:
            data = toml.load(data_file)

        for r in data['repositories']:
            #TODO: read the repo label from the flag
            yield scrapy.Request(url=f'{self.url}/{r}/issues?labels=help%20wanted',
                                 headers=headers,
                                 callback=self.parse,
                                 meta={'repo': r})

    def parse(self, response):
        """
        Parse the response object and select the article box for each trending repo
        """
        repositories = response.json()
        labels = []
        repos = []
        name = response.meta.get('repo')
        languages = requests.get(f'{self.url}/{name}/languages').json()
        language = list(languages)[0]
        for repo in repositories:
            repo_item = Item()
            repo_item['id'] = repo.get('id')
            repo_item['title'] = repo.get('title')
            repo_item['description'] = repo.get('body')
            if repo.get('labels'):
                for label in repo['labels']:
                    labels.append(label.get('name'))
            repo_item['tags'] = labels
            repo_item['url'] = repo.get('html_url')
            repo_item['language'] = language
            repo_item['image'] = repo['user'].get('avatar_url')
            repo_item['type'] = 'github-issues'
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