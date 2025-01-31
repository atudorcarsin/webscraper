from django.contrib import admin
from .models import Group, Item

admin.site.site_header = 'Webscraper administration'
admin.site.site_title = 'Webscraper site admin'

# TODO: Customize interface for Group and Item models
admin.site.register(Group)
admin.site.register(Item)
