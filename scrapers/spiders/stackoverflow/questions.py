import scrapy
from items import Item
from scrapy.utils.project import get_project_settings
import helpers

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
        token = self.settings.get('STACKOVERFLOW_TOKEN') 
        headers = helpers.add_request_headers(token)
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
            question['type'] = 'contribute'
            question['title'] = q.get('title')
            question['description'] = helpers.html_to_text(q.get('body'))
            question['name'] = q['owner'].get('display_name')
            question['tags'] = q.get('tags')
            question['image'] = q['owner'].get('profile_image')
            questions.append(question)
        return questions
