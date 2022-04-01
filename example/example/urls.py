from django.urls import include, path
from django.contrib import admin


admin.autodiscover()


urlpatterns = [
    path("admin/", admin.site.urls),
    path("s3direct/", include("s3direct.urls")),
    path("form/", include("cat.urls")),
]
