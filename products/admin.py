from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Product)
admin.site.register(models.ProductCategory)
admin.site.register(models.ProductColors)
admin.site.register(models.ProductImg)
