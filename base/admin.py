from django.contrib import admin
from .models import OrderItem, Product, Review, Order, ShippingAddress
# Register your models here.


class ProductAdmin(admin.ModelAdmin):
  search_fields = ['user','name']
  

class ReviewAdmin(admin.ModelAdmin):
  search_fields = ['product', 'name','user','comment']

class OrderAdmin(admin.ModelAdmin):
  search_fields = ['user']

class OrderItemAdmin(admin.ModelAdmin):
  search_fields = ['product','order','name']

class ShippingAddressAdmin(admin.ModelAdmin):
  search_fields = ['order']


admin.site.register(Product, ProductAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(ShippingAddress, ShippingAddressAdmin)
