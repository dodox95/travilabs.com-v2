# backend\backend\urls.py
from django.contrib import admin
from django.urls import path
from pive import views  # Make sure to import your app's views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.index, name="index"),  # This will serve your index page
    # You can add more URL patterns for other views/pages
]
