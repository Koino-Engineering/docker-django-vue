# docker-django-vue

- docker上におけるdjango-vueのテンプレート

# 開発環境
```
docker-compose up
```

# 今のところできること
- フロント
  - `localhost:8080`
- サンプルAPI
  - coupon
    - `http://localhost:8080/coupon/?coupon_code=0001`
    - `http://localhost:8080/coupon/?coupon_code=0002`
- バックエンド
  - 管理画面にアクセス
    - `localhost:5000/admin`
  - API操作
    - `localhost:5000/users`
    - `localhost:5000/groups`
  - DBダンプ
    - `python manage.py dumpdata --natural-foreign --exclude auth.permission --exclude contenttypes --indent 4 > data.json `