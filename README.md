# **webscraper**

## Overview

Simple web scraper application.

Stack:
- [Django](https://www.djangoproject.com) (backend)
- [React](https://react.dev) (frontend)
- [PostgreSQL](https://www.postgresql.org) (database)

Other tools used:
- [Vite](https://vite.dev) (dev server)
- [Docker](https://www.docker.com) (containerization)

## Installation
Requirements: [Git](https://git-scm.com),
[Docker](https://www.docker.com) <br/>

1. Clone the repository:
```
git clone https://github.com/atudorcarsin/webscraper.git
```
2. Change directory:
```
cd webscraper
```
3. Build the Docker services:
```
docker-compose --env-file .env.docker build
```
4. Run the Docker container:
```
docker-compose --env-file .env.docker up -d
```
5. Create superuser:
```
docker-compose --env-file .env.docker run backend python manage.py createsuperuser --noinput
```

That's it! The application should be running at [http://localhost](http://localhost).

## Usage

When accessing the application for the first time, you should be redirected to the login page.
The default username is `admin` and the password is `admin`.

In order to access the admin panel, you can navigate to [http://localhost:8000/admin](http://localhost:8000/admin).

## Contributing

This project is open to any contributions. Feel free to open an issue or submit a pull request.
Be sure to check out [https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project) for more information.