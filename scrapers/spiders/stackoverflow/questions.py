import scrapy
from items import Item
from scrapy.utils.project import get_project_settings


class QuestionsSpider(scrapy.Spider):
    """
    Get StackOverflow questions
    """
    name = "questions"
    settings = get_project_settings()

    def start_requests(self):
        """
        Start calls to the provided url's
        """
        headers = self.__request_headers()
        url = self.settings.get('STACKOVERFLOW_QUESTIONS')        
        yield scrapy.Request(url=url, headers=headers, callback=self.parse)

    def parse(self, response):
        """
        Parse the response object and select the article box for each trending repo
        """
        data = response.json()
        questions = []
        for q in data['items']:
            question = Item()
            question['id'] = q.get('question_id')
            question['title'] = q.get('title')
            question['tags'] = q.get('tags')
            question['url'] = q.get('link')
            question['image'] = q['owner'].get('profile_image')
            question['type'] = 'question'
            question['language'] = q.get('tags')[0]
            questions.append(question)
        return questions

    def __request_headers(self):
        """
        Setup headers for API requests
        @TODO: Move this to utils/helper
        """
        token = self.settings.get('STACKOVERFLOW_TOKEN')     
        headers={
            'User-Agent': 'Mozilla/5.0',
            "Accept": "application/vnd.github.v3+json",
            "Authorization": token
        }
        return headers