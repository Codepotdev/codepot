import re
from bs4 import BeautifulSoup
from markdown import markdown

def html_to_text(text):
    """
    Clean text from HTML tags
    @TODO: Double check if the regex works, if not use BeautifulSoup. Make sure the code examples are correct
    """
    description = re.sub('<[^<]+?>', '', text)
    return description

def markdown_to_text(md):
    """
    Clean text from Markdown syntax
    """
    html = markdown(md)
    soup = BeautifulSoup(html, features='html.parser')
    return soup.get_text()

def add_request_headers(token):
    """
    Setup headers for API requests
    @TODO: Move this to utils/helper
    """   
    headers={
        'User-Agent': 'Mozilla/5.0',
        "Accept": "application/vnd.github.v3+json",
        "Authorization": token
    }
    return headers