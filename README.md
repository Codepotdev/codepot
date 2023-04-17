
# Codepot

Codepot is an open-source platform that helps developers grow their skills and portfolio by contributing to solving GitHub and GitLab issues, answering StackOverflow questions, reading technical blogs, and more. 
Our goal is to provide a central hub for developers to find resources and opportunities to learn, collaborate, and advance their careers.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Getting Started

These instructions will help you set up a local development environment for Codepot.

### Prerequisites

- Node.js: Codepot's frontend is built with Next.js, which requires Node.js. Download and install the latest LTS version from the [official Node.js website](https://nodejs.org/).
- Python 3: The web scraper in Codepot is built with the Scrapy library, which requires Python 3. Download and install Python 3 from the [official Python website](https://www.python.org/downloads/).

### Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/Codepot.git
cd Codepot
```

2. Install frontend dependencies:

```
cd site
npm install
```


3. Install web scraper dependencies:

```
cd ../Scrapers
pip install -r requirements.txt
```


4. Start the frontend development server:

```
cd ../site
npm run dev
```


## Project Structure

- `site`: This directory contains the Next.js frontend application.
- `Scrapers`: This directory contains the Python Scrapy web scraper.

## Contributing

Codepot welcomes any type of contribution, whether it's fixing bugs, improving design, adding new features, or anything else that helps the project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name (e.g., `fix-bug-xyz` or `add-new-feature`).
3. Make your changes in the new branch.
4. Commit your changes and push them to your fork.
5. Create a pull request, detailing your changes and the motivation behind them.

## License

Codepot is released under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to open an issue or submit a pull request. You can also reach out to the project maintainers directly through their GitHub profiles or email addresses.
