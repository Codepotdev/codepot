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
        #for tag in tags:
        yield scrapy.Request(url='https://dev.to/api/articles', callback=self.parse)

    def parse(self, response):
        """
        Parse the response object and select the blog
        """
        blogs = []
        posts = response.json()
        for post in posts:
            item = Item()
            item['id'] = post.get('id')
            item["title"] = post.get('title')
            item['type'] = 'expand'
            item["description"] = post.get('description')
            item["tags"] = post.get('tag_list')      
            item['image'] = post['user'].get('profile_image')
            item['name'] = post['user'].get('name')
            blogs.append(item)
        return blogs
       
