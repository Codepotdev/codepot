import scrapy
import requests
from github.items import RepoItem, TrendingItem

class TrendingSpider(scrapy.Spider):
    """
    Get GitHub Trending repositories
    """
    name = "trending"
    time_since = ''

    def start_requests(self):
        """
        Start calls to the provided url's
        """
        time = getattr(self, 'time', None)
        self.time_since = [x.strip() for x in time.split(',')]
        urls = [
            f'https://github.com/trending?since={self.time_since[0]}',
            f'https://github.com/trending?since={self.time_since[1]}',
            f'https://github.com/trending?since={self.time_since[2]}',
        ]
        for index, url in enumerate(urls):
            yield scrapy.Request(url=url, callback=self.parse, meta={'num': index})

    def parse(self, response):
        """
        Parse the response object and select the article box for each trending repo
        """
        repos = []
        index = response.meta.get('num')
        for quote in response.css('article.Box-row h1'):
            href = quote.css('a').attrib['href']
            name = href[1:]
            repo = requests.get('https://api.github.com/repos/' +  name, 
                                headers={
                                    'User-Agent': 'Mozilla/5.0',
                                    "Accept": "application/vnd.github.v3+json",
                                    "Authorization" : 'token value'
                                    }).json()
            repo_item = RepoItem()
            repo_item['id'] = repo.get('id')
            repo_item['name'] = repo.get('full_name')
            repo_item['description'] = repo.get('description')
            repo_item['topics'] = repo.get('topics')
            repo_item['url'] = repo['owner'].get('avatar_url')
            repos.append(repo_item)
        trending = TrendingItem()
        trending[self.time_since[index]] = repos
        return trending
       