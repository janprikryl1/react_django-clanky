from django.urls import path
from . import views

urlpatterns = [
    # "odkazy" na funkce vracející HTML soubory
    path('', views.index, name='index'),
    path('api/get_items', views.get_items, name='api/get_items'),  # Rest API
    path('api/add_item', views.add_item, name='add_item'),
    ]
