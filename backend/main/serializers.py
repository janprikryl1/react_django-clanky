from rest_framework import serializers
from .models import Article


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id',
                  'name',
                  'subject',
                  'author',
                  'text',
                  'date_time')

    '''def get_image_url(self, car):
        request = self.context.get('request')
        photo_url = car.photo.url
        return request.build_absolute_uri(photo_url)'''