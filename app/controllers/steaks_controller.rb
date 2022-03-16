class SteaksController < ApplicationController

    # skip_before_action :authorize, except: :my_steaks

    def index
        render json: Steak.all
    end

    # def show
    #     steak = find_steak
    #     render json: steak
    # end

    def highest_rated

        render json: Steak.find(1)
    end

    private 

    def find_steak
        Steak.find(params[:id])
    end
end
