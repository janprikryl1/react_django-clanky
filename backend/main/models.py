from django.db import models


# Create your models here.
class Article(models.Model):
    name = models.CharField(max_length=50)
    subject = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    text = models.TextField()
    date_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
