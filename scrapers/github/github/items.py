import scrapy

class RepoItem(scrapy.Item):
    """
    Specific trending repo information
    """
    id = scrapy.Field()
    name = scrapy.Field()
    description = scrapy.Field()
    topics = scrapy.Field()
    url = scrapy.Field()

class TrendingItem(scrapy.Item):
    """
    Map daily, weekly, monthly trending repos in one class
    """
    daily = scrapy.Field()
    weekly = scrapy.Field()
    monthly = scrapy.Field()

