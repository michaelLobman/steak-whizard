class SteaksController < ApplicationController
    
    def index
        render json: Steak.order(rating: :desc)
    end

    def create
        steak = Steak.create(steak_params)
        @current_user.fav_steak = steak.id if params[:fav_boolean] 
        render json: steak
    end

    def highest_rated
        max = Steak.maximum(:rating)
        render json: Steak.where(rating: max)
    end

    private 

    def find_steak
        Steak.find(params[:id])
    end

    def steak_params
        params.permit(:restaurant)
    end
end
