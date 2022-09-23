import scrapy
from items import Item
import feedparser


class DevtoSpider(scrapy.Spider):
    """
    Get Dev.to blogs per tags
    """
    name = "devto_blogs"

    def start_requests(self):
        """
        Start calls to the provided url's
        """
        url = 'https://dev.to/feed/tag/'
        tags = ['javascript', 'python', 'typescript', 'java', 'php']
        for tag in tags:
            yield scrapy.Request(url=f'{url}{tag}', callback=self.parse,
                                meta={'tag': tag})

    def parse(self, response):
        """
        Parse the response object and select the blog
        """
        blogs = []
        blog_feed = feedparser.parse(response.body)
        posts = blog_feed.entries
        for post in posts:
            item = Item()
            item["title"] = post.title
            item["url"] = post.link
            item["description"] = post.description
            item["type"] = "blog"
            item["tags"] = post.get('category')
            item["language"] = response.meta.get('tag')
            blogs.append(item)
        return blogs
       
