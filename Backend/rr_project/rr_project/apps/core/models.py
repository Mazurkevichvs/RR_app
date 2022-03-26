from django.db import models

# Create your models here.

class Recipe(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    time_minutes = models.IntegerField(default=0)
    slug = models.CharField(max_length=255)

    class Meta:
        verbose_name='recipe'
        verbose_name_plural='recipes'

    def __str__(self):
        return self.title
