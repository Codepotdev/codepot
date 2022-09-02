import scrapy

class Item(scrapy.Item):
    """
    Specific trending repo information
    """
    id = scrapy.Field()
    title = scrapy.Field()
    description = scrapy.Field()
    tags = scrapy.Field()
    url = scrapy.Field()
    image = scrapy.Field()
    type = scrapy.Field()
    language = scrapy.Field()


