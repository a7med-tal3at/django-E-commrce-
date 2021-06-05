from django.db import models

import datetime

# Create your models here.


class ProductCategory(models.Model):
    categroyName = models.CharField(max_length=150)

    def __str__(self):
        return self.categroyName


class Product(models.Model):
    prodName = models.CharField(max_length=150)
    prodPrice = models.FloatField(null=True)
    prodCate = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    prodDate = models.DateTimeField(default=datetime.datetime.now)
    prodDiscrption = models.TextField(null=True)
    prodDescound = models.IntegerField(default=0)
    prodRate = models.FloatField(null=True, default=0.0)
    prodIsActive = models.BooleanField(default=True)
    color = models.CharField(max_length=150)
    img = models.ImageField(upload_to='product/img/%y/%m/%d')

    def __str__(self):
        return self.prodName

    class Meta:
        ordering = ['prodDate']


class ProductColors(models.Model):
    prodNo = models.ForeignKey(Product, on_delete=models.CASCADE)
    prodColor = models.CharField(max_length=150)

class ProductImg(models.Model):
    prodNo  = models.ForeignKey(Product,  on_delete=models.CASCADE)
    prodImg = models.ImageField(upload_to='product/img/%y/%m/%d') 
