from django.shortcuts import render
from django.http import JsonResponse
from products.models import Product
# Create your views here.

def index(request):
    pro = Product.objects.all()
    sm_pro = pro.filter(prodCate=1)
    context = {
        'products': pro,
        'sm_products': sm_pro
    }

    return render(request, 'pages/index.html', context)

def about(request):
    context = {
        'products': models.Product.objects.all()
    }
    return render(request, 'pages/about.html')
