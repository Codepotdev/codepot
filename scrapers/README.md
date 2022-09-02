### GitHub Scrapers :octocat: 

This scrapers are used to get data from GitHub that is not returned by GitHub API.

### Install :minidisc:

```
cd github && pip install -r requirements.txt
```

### Run Trending Scraper :checkered_flag:

```
scrapy runspider trending.py -a time=daily,weekly,monthly
```

The parameters sent to the `time` can be:

* daily - Get trending repos for today
* weekly - Get trending repos for current week
* monthly - Get trending repos for current month

To save the data in a json file run:

```
scrapy crawl trending -O trending_repos.json
```

### Run Issues Scraper :checkered_flag:

```
scrapy runspider issues.py
```

To save the data in a json file run:

```
scrapy crawl issues -O issues.json
```

### Configuration :page_with_curl:


The `github` spiders use Mongo pipeline to save scraped data to MongoDB. Change the configuration in `settings.py`:

```
MONGO_URI = 'mongodb+srv://user:pass@cluster'
MONGO_DATABASE = 'dbname'
```

If you don't want to use the Mongo pipeline, remove the `'github.pipelines.MongoPipeline': 300` from `ITEMS_PIPELINE`.

### TODO :construction: :warning:

* [ ] Add validation for the `time=daily,weekly,monthly` params in Trending spider.
* [ ] Read hardcoded variables from config.
* [ ] Improve MongoPipeline. Currently it will save 3 documents per `time` parameter. Add middleware or new pipeline that will combine all items in one document.
* [ ] Better Exception handling.
* [ ] Add label flag to the Issues spider as `help-wanted`, `good-first-issue` etc
* [ ] Allow the spider to collect issues from Gitlab or other Git servers.