# Generated by Django 4.0.4 on 2022-06-05 08:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_rename_nunreviews_product_numreviews'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='deliverdAt',
            new_name='deliveredAt',
        ),
    ]
