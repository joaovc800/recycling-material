from rest_framework import serializers
from register import models

class RegistersSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Registers
        fields = '__all__'