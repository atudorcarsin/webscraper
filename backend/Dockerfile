FROM python:3

WORKDIR /backend

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ARG BACKEND_PORT=8000

EXPOSE $BACKEND_PORT

