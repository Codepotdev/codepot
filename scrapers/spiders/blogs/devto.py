import json
from items import Item

devtoFeedUrl = "https://dev.to/feed"


def devto_rss(rss=None):
    """
    Take link of rss feed as argument
    """
    if rss is not None:
        import feedparser
        blog_feed = blog_feed = feedparser.parse(rss)

        posts = blog_feed.entries
        post_list = []

        for post in posts:
            try:
                temp = Item()
                temp["title"] = post.title
                temp["link"] = post.link
                temp["author"] = post.author
                temp["time_published"] = post.published
                temp["language"] = post.category
                temp["tags"] = [post.term for post in post.tags]
                temp["image"] = post.image
            except:
                pass
            post_list.append(temp)
        return post_list
    else:
        return None


print(json.dumps(devto_rss(devtoFeedUrl), indent=2))
