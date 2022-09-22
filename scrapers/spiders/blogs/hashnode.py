import scrapy
import requests
from items import Item
from scrapy.utils.project import get_project_settings


class HashnodeSpider(scrapy.Spider):
    """
    Get Hashnode Trending blogs per tags
    """
    name = "hasnode_blogs"

    def start_requests(self):
        """
        Start calls to the provided url's
        """
        url = 'https://api.hashnode.com/'
        #@TODO: Add option to query more pages
        query = '''
            query {
            storiesFeed(type:COMMUNITY, page:0){
                _id,
                title,
                brief,
                slug,
                coverImage,
                totalReactions,
                dateAdded,
                }
            }
        '''
        import json
        yield scrapy.Request(url=url, method='POST', body=json.dumps({'query':query}), callback=self.parse)

    def parse(self, response):
        """
        Parse the response object and select the blog
        """
        blogs = []
        data = response.json()
        articles = data['data']['storiesFeed']
        for article in articles:
            blog_item = Item()
            blog_item['id'] = article.get('_id')
            blog_item['title'] = article.get('title')
            blog_item['description'] = article.get('brief')
            blog_item['url'] = f'https://hashnode.com/search?q={article.get("slug")}'
            blog_item['image'] = article.get('coverImage')
            blog_item['type'] = 'blog'
            blogs.append(blog_item)
        return blogs
       