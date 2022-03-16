class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = find_user
        render json: user
    end

    def update 
        user = find_user
        user.update!(user_params)
        render json: user, status: :accepted
    end

    private

    def user_params
        params.permit(:username, :password, :fav_steak)
    end

    def find_user
        User.find(session[:user_id])
    end
end
