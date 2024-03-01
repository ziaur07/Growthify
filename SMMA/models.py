from django.db import models

# Create your models here.
from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=200)
    testimonial = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    customer_photo = models.ImageField(upload_to='customer_photos/', blank=True, null=True)
    
    def __str__(self):
        return f'Testimonial by {self.name}'