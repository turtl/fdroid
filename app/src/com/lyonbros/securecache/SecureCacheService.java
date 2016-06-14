package com.lyonbros.securecache;

import android.app.Notification;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Intent;
import android.util.Log;
import android.os.IBinder;
import android.R;

public class SecureCacheService extends Service
{
	public static final String CACHE_PERMISSION = "com.lyonbros.securecache.ACCESS_SECRETS";
	public static final String RECEIVE_CACHE = "com.lyonbros.securecache.RECEIVE_CACHE";
	private static final String TAG = "MyActivity";
	private static final int ONGOING_NOTIFICATION_ID = 1;
	private String cache;

	@Override
	public IBinder onBind(Intent intent)
	{
		return null;
	}

	@Override
	public void onCreate()
	{
		super.onCreate();
		Log.i(TAG, "SecureCacheService: created");
	}

	@Override
	public int onStartCommand(Intent intent, int flags, int startid)
	{
		String action = intent.getStringExtra("action");
		Log.i(TAG, "SecureCacheService: action: "+action);
		if(action.equals("set"))
		{
			String data = intent.getStringExtra("data");
			cache = data;
			respond("true");
		}
		else if(action.equals("wipe"))
		{
			cache = null;
			respond("true");
		}
		else if(action.equals("get"))
		{
			respond(cache);
		}
		else if(action.equals("foreground"))
		{
			String title = intent.getStringExtra("title");
			String text = intent.getStringExtra("text");
			foreground(title, text);
			respond("true");
		}
		else if(action.equals("unforeground"))
		{
			unforeground();
			respond("true");
		}
		else if(action.equals("stop"))
		{
			stopSelf();
			respond("true");
		}
		return START_STICKY;
	}

	@Override
	public void onDestroy()
	{
		super.onDestroy();
		Log.i(TAG, "SecureCacheService: destroyed");
	}

	private void respond(String msg)
	{
		Intent intent = new Intent(RECEIVE_CACHE);
		intent.putExtra("data", cache);
		intent.setPackage(getApplicationContext().getPackageName());
		sendBroadcast(intent, CACHE_PERMISSION);
	}

	private Notification getActivityNotification(String title, String text)
	{
		Intent main = getApplicationContext().getPackageManager().getLaunchIntentForPackage(getApplicationContext().getPackageName());
		main.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
		PendingIntent pending = PendingIntent.getActivity(this, 6969, main, PendingIntent.FLAG_UPDATE_CURRENT);

		int icon = R.drawable.star_big_on;
		int notify_icon = getResources().getIdentifier("notification", "drawable", getPackageName());
		int app_icon = getResources().getIdentifier("icon", "drawable", getPackageName());
		if(notify_icon != 0) icon = notify_icon;
		else if(app_icon != 0) icon = app_icon;

		Notification.Builder builder = new Notification.Builder(this);
		builder.setContentTitle(title);
		builder.setContentText(text);
		builder.setSmallIcon(icon);
		builder.setContentIntent(pending);
		Notification notification;
		notification = builder.build();
		notification.flags |= Notification.FLAG_ONGOING_EVENT | Notification.FLAG_FOREGROUND_SERVICE | Notification.FLAG_NO_CLEAR;
		return notification;
	}

	private void foreground(String title, String text)
	{
		Notification notification = getActivityNotification(title, text);
		startForeground(ONGOING_NOTIFICATION_ID, notification);
		Log.i(TAG, "SecureCacheService: start foreground");
	}

	private void unforeground()
	{
		stopForeground(true);
		Log.i(TAG, "SecureCacheService: stop foreground");
	}
}

