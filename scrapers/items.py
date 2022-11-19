import scrapy

class Item(scrapy.Item):
    """
    Specific trending repo information
    """
    id = scrapy.Field()
    type = scrapy.Field()
    title = scrapy.Field()
    description = scrapy.Field()
    tags = scrapy.Field()
    name = scrapy.Field()
    image = scrapy.Field()



