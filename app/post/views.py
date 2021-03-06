from django.shortcuts import render
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer
# Create your views here.

class ListPost(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class DetailPost(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer