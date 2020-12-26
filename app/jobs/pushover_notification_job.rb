class PushoverNotificationJob < ApplicationJob
  queue_as :default

  def perform(id)
    logger.info("Delivering Pushover Notification [#{id}]")
    pushover_notification = Communication::Notification::Pushover.find_by(:id => id)
    if pushover_notification.blank?
      logger.error("Failed to load Communication::Notification::Pushover with ID #{id}")
      return
    end

    begin
      pushover_notification.deliver
    rescue => exception
      logger.error("Failed to deliver Communication::Notification::Pushover with ID #{id}: #{exception&.message || "unknown message"}")
    end
  end
end
