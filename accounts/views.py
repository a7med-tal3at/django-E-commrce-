from django.shortcuts import render
from products.models import Product
# Create your views here.

def signin(request):
    pro = Product.objects.all()
    sm_pro = pro.filter(prodCate=1)
    context = {
        'products': pro,
        'sm_products': sm_pro
    }

    return render(request, 'accounts/signin.html', context)


def signup(request):
    pro = Product.objects.all()
    sm_pro = pro.filter(prodCate=1)
    context = {
        'products': pro,
        'sm_products': sm_pro
    }

    return render(request, 'accounts/signup.html', context)


def profile(request):
    pro = Product.objects.all()
    sm_pro = pro.filter(prodCate=1)
    context = {
        'products': pro,
        'sm_products': sm_pro
    }

    return render(request, 'accounts/profile.html', context)


def editProfile(request):
    pro = Product.objects.all()
    sm_pro = pro.filter(prodCate=1)
    context = {
        'products': pro,
        'sm_products': sm_pro
    }

    return render(request, 'accounts/edit_profile.html', context)