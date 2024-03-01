

# Create your views here.
from django.shortcuts import render
from .models import Testimonial

def home(request):
    testimonials = Testimonial.objects.all()
    return render(request, 'home.html', {'testimonials': testimonials})