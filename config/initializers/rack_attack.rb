# https://github.com/rack/rack-attack/blob/master/docs/example_configuration.md
module Rack
  class Attack
    # https://github.com/rack/rack-attack#fail2ban
    blocklist("fail2ban pentesters") do |req|
      # `filter` returns truthy value if request fails, or if it's from a previously banned IP
      # so the request is blocked
      Rack::Attack::Fail2Ban.filter("pentesters-#{req.ip}", :maxretry => 2, :findtime => 10.minutes,
                                                            :bantime => 2.hours,) do
        # The count for the IP is incremented if the return value is truthy
        CGI.unescape(req.query_string) =~ %r{/etc/passwd} ||
          req.path.include?("/etc/passwd") ||
          req.path.include?("password") ||
          req.path.include?("wp-admin") || # hacking Wordpress, great
          req.path.include?("wp-login") ||
          req.path.include?("wp-content") ||
          req.path.include?(".php") || # dump any php requests
          req.path.include?("\\x") || # UNICODE exploiters
          req.path.include?(".env") # I see scrapers looking for this too
      end
    end

    # Lockout IP addresses that are hammering your login page.
    # After 20 requests in 1 minute, block all requests from that IP for 1 hour.
    # Rack::Attack.blocklist('allow2ban login scrapers') do |req|
    #   # `filter` returns false value if request is to your login page (but still
    #   # increments the count) so request below the limit are not blocked until
    #   # they hit the limit.  At that point, filter will return true and block.
    #   Rack::Attack::Allow2Ban.filter(req.ip, maxretry: 20, findtime: 1.minute, bantime: 1.hour) do
    #     # The count for the IP is incremented if the return value is truthy.
    #     req.path == '/login' and req.post?
    #   end
    # end
  end
end
