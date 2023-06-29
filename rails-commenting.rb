# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) A new model was generated called BlogPost
class BlogPostsController < ApplicationController
  def index
    # ---2) Within this RESTful route method, a instance variable was created to show all BlogPost using .all
    @posts = BlogPost.all
  end

  # ---3) This RESTful route is called show, which shows details of a specific BlogPost using params specifying the id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This method RESTful route displays a form to the user to create a new blog post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Within this RESTful route method, an instance variable is declared which creates a new BlogPost with only the information permitted by the passed parameter. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Within this RESTful route method, displays a form for the user to edit a blog post by specifying which id you want to edit.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Within this RESTful route method, this will modify an existing blog post by what is permitted within the strong parameters.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Redirects to the landing page of the usage of an alias to define the path.
      redirect_to blog_posts_path
    end
  end

  # ---9) this restricts the scope of which this method is called. Only can be called within this class no where else. Everything below this is protected
  private
  def blog_post_params
    # ---10) This strong parameters. The require, requires the attribute passed in. And permit allows certain items to be called upon for create and update.
    params.require(:blog_post).permit(:title, :content)
  end
end
