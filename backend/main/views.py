from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
import json
from .serializers import ItemSerializer
from rest_framework import status
from rest_framework.parsers import JSONParser
from .models import Article


# Create your views here.
def index(request):
    return HttpResponse("Nemáte právo")


@api_view(['GET'])
def get_items(request):
    all = Article.objects.all()
    items_serializer = ItemSerializer(all, context={"request": request}, many=True)
    return JsonResponse(items_serializer.data, safe=False)

@api_view(['POST'])
def add_item(request):
    name = request.data.get('name', None)
    subject = request.data.get('subject', None)
    author = request.data.get('author', None)
    text = request.data.get('text', None)

    print(name, subject, author, text)

    new_article = Article(name=name, subject=subject, author=author, text=text)
    new_article.save()


    return JsonResponse({"status":True})

# Chyby stránky
def handler404(request, *args, **argv):  # Stránka nenalezena
    return render(request, "error.html", {'code': 404})


def handler500(request, *args, **argv):  # Jiná chyba
    return render(request, "error.html", {'code': 500})