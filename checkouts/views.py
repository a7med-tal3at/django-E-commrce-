from django.shortcuts import render

# Create your views here.

def checkout(request):
    return render(request, 'checkouts/checkouts.html')