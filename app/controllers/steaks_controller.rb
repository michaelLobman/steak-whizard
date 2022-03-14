class SteaksController < ApplicationController

    skip_before_action :authorize, except: :my_steaks

    def index
        render json: Steak.order(rating: :desc)
    end

    def show
        steak = find_steak
        render json: steak
    end

    private 

    def find_steak
        Steak.find(params[:id])
    end
end
