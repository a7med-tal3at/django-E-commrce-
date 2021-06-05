from django.shortcuts import render
from . import models
# Create your views here.

def category(request):
    context = {
        'products': models.Product.objects.all()
    }
    return render(request, 'products/category.html', context)

def search(request):
    # get all data for database

    pro = models.Product.objects.all()

    #  get the query string from url with GET method
    
    q = None
    if 'q' in request.GET:
        q = request.GET['q']
        
        # Filter the resulat 

        pro = pro.filter(prodName__icontains=q)


    # Create object that have all data i need

    context = {
        'products': pro,
        'q': q
    }

    return render(request, 'products/search.html', context)