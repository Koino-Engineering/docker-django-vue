from rest_framework import serializers

from utils.models import BaseModel


class BaseModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BaseModel
        fields = '__all__'
        read_only_fields = ('created_at')
