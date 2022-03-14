class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    private

    def user_params
        permit.params(:username, :password, :fav_steak)
    end
end
