from __future__ import unicode_literals

import os
from urllib.parse import unquote_plus

from django.forms import widgets
from django.utils.safestring import mark_safe

try:
    from django.urls import reverse
except ImportError:
    # Django <1.10 compliance
    from django.core.urlresolvers import reverse
from django.template.loader import render_to_string
from django.conf import settings


class S3DirectWidget(widgets.TextInput):
    class Media:
        js = ("s3direct/dist/index.js",)
        css = {"all": ("s3direct/dist/index.css",)}

    def __init__(self, *args, **kwargs):
        self.dest = kwargs.pop("dest", None)
        super(S3DirectWidget, self).__init__(*args, **kwargs)

    def render(self, name, value, attrs=None, **kwargs):
        if value:
            file_name = os.path.basename(unquote_plus(value))
        else:
            file_name = ""

        tpl = os.path.join("s3direct", "s3direct-widget.tpl")
        output = render_to_string(
            tpl,
            {
                "policy_url": reverse("s3direct"),
                "signing_url": reverse("s3direct-signing"),
                "element_id": self.build_attrs(attrs).get("id", "") if attrs else "",
                "file_name": file_name,
                "dest": self.dest,
                "file_url": value or "",
                "name": name,
                "style": self.build_attrs(attrs).get("style", "") if attrs else "",
                "csrf_cookie_name": getattr(settings, "CSRF_COOKIE_NAME", "csrftoken"),
            },
        )

        return mark_safe(output)
