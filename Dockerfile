FROM nikolaik/python-nodejs:python3.8-nodejs12
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/
RUN cd /code/front && npm install && npm run build
