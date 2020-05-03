FROM python:3.7.3-slim

RUN pip install --upgrade pip

WORKDIR /app

COPY requirements.txt /app
RUN pip3 install -r /app/requirements.txt

COPY . /app

CMD ["gunicorn", "-b", "0.0.0.0:8000", "wsgi:app"]