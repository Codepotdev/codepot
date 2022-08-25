import scrapy
from github.items import IssuesItem
import toml

class IssuesSpider(scrapy.Spider):
    """
    Get GitHub repositories issues, labeld help-wanted
    """
    name = "issues"

    def start_requests(self):
        """
        Start calls to the provided url's
        """
        
        with open('../data/repositories.toml', "r") as data_file:
            data = toml.load(data_file)

        for r in data['repositories']:
            #TODO: read the repo label from the flag
            yield scrapy.Request(url=f'https://api.github.com/repos/{r}/issues?labels=help%20wanted', callback=self.parse)

    def parse(self, response):
        """
        Parse the response object and select the article box for each trending repo
        """
        repositories = response.json()
        repos = []
        for repo in repositories:
            repo_item = IssuesItem()
            repo_item['id'] = repo.get('id')
            repo_item['title'] = repo.get('title')
            repo_item['description'] = repo.get('body')
            repo_item['labels'] = repo.get('labels')
            repo_item['url'] = repo.get('url')
            repos.append(repo_item)
        return repos
