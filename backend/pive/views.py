# views.py
from django.shortcuts import render

def index(request):
    # Define the range you want to use in your template here
    context = {
        'range': range(4)
    }
    return render(request, 'index.html', context)
